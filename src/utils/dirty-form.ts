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
    return (el as HTMLInputElement).checked !== (el as HTMLInputElement).defaultChecked;
  }
  return el.value !== el.defaultValue;
}

export function getDirtyFormData(form: HTMLFormElement): FormData {
  const dirty = new FormData();
  for (const e of form.elements) {
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
