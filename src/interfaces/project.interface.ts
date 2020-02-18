export default interface Project {
    
    getTechnologies(): string[]
    getCardIcon(): string
    getCardImg(): string
    getCardDescription(): string
    getTitle(): string
    hasDescription(): boolean
    getDescription(): string
    getYear(): number
    hasView(): boolean
    hasDemo(): boolean
}