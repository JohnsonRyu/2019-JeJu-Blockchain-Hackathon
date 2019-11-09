import Router from "next/router";

class ParsingAPI {
  public getDate = () => {
    const today = new Date();
    const yy = today.getFullYear().toString();
    let mm = (today.getMonth() + 1);
    let dd = today.getDate();

    let stringDate = '';
    let stringMonth = '';
    if (dd < 10) {
      stringDate = '0' + dd.toString();
    } else {
      stringDate = dd.toString();
    }

    if (mm < 10) {
      stringMonth = '0' + mm.toString();
    } else {
      stringMonth = mm.toString();
    }

    return yy + "." + stringMonth + "." + stringDate;
  }

  public parseGender = (gender: number) => {
    if (gender === 0) {
      return "여"
    } else if (gender === 1) {
      return "남"
    } else if (gender === 2) {
      return "무"
    }
  }

  public sendQuery = (pathname: string, did: number) => {
    Router.push({
      pathname: pathname,
      query: { userDID: did }
    });
  };

  public makeDID = () => {
    // from 1 - 100 * 990
    return Math.floor(Math.random() * 899999 + 100000);
  }
}

export const parsingAPI = new ParsingAPI();