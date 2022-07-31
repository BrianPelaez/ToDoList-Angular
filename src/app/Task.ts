export interface Task {
    id?:number, // Cuando creamos una task el ID podria no venir
    text: string,
    day: string,
    reminder: boolean
}