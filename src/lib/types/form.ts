type FormField = {
  label: string,
  type: string,
  placeholder: string,
}

type FormButton = {
  name: string,
}

export type FormConfig = {
  name: string,
  fields: FormField[],
  buttons: FormButton[]
}