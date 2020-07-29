export type User = {
  dateAdded: string
  clientKey: string
  firstName: string
  lastName: string
  dob: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  authenticated: boolean
  authProvider: string
}
