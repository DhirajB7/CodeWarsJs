class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let answer = "";

    let flag = false;

    for (const a of dirtyFileName) {
      if (flag) {
        if (a === ".") {
          if (answer.includes(".")) {
            break;
          }
        }
        answer += a;
      }

      if (a === "_") {
        flag = true;
      }
    }

    return answer;
  }
}

console.log(
  FileNameExtractor.extractFileName(
    "1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"
  )
);
