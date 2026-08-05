function getCurrentValue(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string | boolean {
  if (el instanceof HTMLSelectElement) {
    return Array.from(el.options).filter(o => o.selected).map(o => o.value).join(",");
  }
  if (el.type === "checkbox" || el.type === "radio") {
    return (el as HTMLInputElement).checked;
  }
  return el.value;
}

function isDirty(defaultValue: unknown, currentValue: string | boolean) {
  switch (typeof defaultValue) {
    case "undefined":
      return currentValue !== "";
    case "string":
    case "boolean":
      return defaultValue !== currentValue;
    case "bigint":
    case "number":
    case "object":
      return JSON.stringify(defaultValue) !== currentValue;
    default:
      return true;
  }
}

export function getDirtyFormData(
  form: HTMLFormElement,
  defaultValues: Record<string, unknown>,
): FormData {
  const dirty = new FormData();
  for (const e of Array.from(form.elements)) {
    if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) {
      if (!e.name) continue;

      if (isDirty(defaultValues[e.name], getCurrentValue(e))) {
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
