function isDirty(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
  if (el instanceof HTMLSelectElement) {
    return Array.from(el.options)
      .filter(o => o.selected)
      .map(o => o.value)
      .join(",") !== Array.from(el.options)
      .filter(o => o.defaultSelected)
      .map(o => o.value)
      .join(",");
  }
  if (el.type === "checkbox" || el.type === "radio") {
    const baseline = el.dataset.defaultChecked !== undefined
      ? el.dataset.defaultChecked === "true"
      : (el as HTMLInputElement).defaultChecked;
    return (el as HTMLInputElement).checked !== baseline;
  }
  return el.value !== (el.dataset.defaultValue ?? el.defaultValue);
}

export function getDirtyFormData(form: HTMLFormElement): FormData {
  const dirty = new FormData();
  for (const e of Array.from(form.elements)) {
    if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) {
      if (!e.name) continue;

      if (isDirty(e)) {
        if (e.type === "checkbox" || e.type === "radio") {
          if ((e as HTMLInputElement).checked) {
            dirty.append(e.name, e.value);
          }
        } else {
          dirty.append(e.name, e.value);
        }
      }
    }
  }
  return dirty;
}
