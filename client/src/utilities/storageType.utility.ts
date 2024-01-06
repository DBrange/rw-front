
export const isLocal = JSON.parse(sessionStorage.getItem("keepLoggedIn") as string)

export const storageType = (value: any) => {
  // console.log(value)
  if (!value?.value) {
    console.log('soy session')
    return sessionStorage;
  } else {
    console.log('soy local')
    return localStorage;
  }
}

