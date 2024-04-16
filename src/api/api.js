export function getAllDisease() {
  return fetch("api/disease/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code < 0) {
        return {
          error: res.msg,
          data: null,
        };
      }
      return {
        error: "",
        data: res.data,
      };
    })
    .catch((err) => console.log(err));
}
