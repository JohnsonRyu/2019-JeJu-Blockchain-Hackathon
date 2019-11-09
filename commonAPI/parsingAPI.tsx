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
}

export const parsingAPI = new ParsingAPI();