type FormField = {
  name?: string,
  label: string,
  type: string,
  value: string | number | boolean,
  placeholder: string,
}

type FormButton = {
  name: string,
}

type FormAction<T> = (values: T) => void

export type FormConfig = {
  name: string,
  fields: FormField[],
  buttons: FormButton[],
  onSubmit: FormAction<any>,
}