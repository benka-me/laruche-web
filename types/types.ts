import router from "next/router";

export class Namespace {
  author: string;
  name: string;

  /**
   * getString
   * return the formated string with a slash
   */
  constructor(author: string | string[], name: string | string[]) {
    this.author = author as string;
    this.name = name as string;
  }
  public getString(): string {
    return this.author + "/" + this.name;
  }
  public push() {
    router.push("/[author]/[name]", "/" + this.author + "/" + this.name);
  }
}

export type OnClick = (e: any) => void;
