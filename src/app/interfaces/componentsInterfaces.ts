export interface ButtonItem {
  title?: string;
  innerText?: string;
  source?: string;
  route?: string;
}

export interface goToItem {
  title?: string;
  text?: string;
  route?: string;
}

export interface login {
  login: string;
  password: string;
}

export interface balance {
  value: string;
  type: string;
  date: string
}