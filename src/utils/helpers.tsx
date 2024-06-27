

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getClassNames = (...classes: (string|undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const toCamelCase = (str: string) => {
  return str
    .replace(/\s(.)/g, function (a) {
      return a.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function (b) {
      return b.toLowerCase();
    });
};

export const URLPattern2 =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
export const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/;

export const URLPattern =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g;

export const getLocalStorageData = (storageName: string) => {
  const data = localStorage.getItem(storageName);
  return data ? JSON.parse(data) : null;
}

export const setLocalStorageData = (storageName: string,data: string) => {
  localStorage.setItem(storageName, data);
}
