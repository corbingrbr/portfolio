import Project from '../interfaces/project.interface';

export const LightLab : Project = {

    getTechnologies(): string[] { return ["html", "css", "jquery", "js", "c", "cpp", "adafruit"]},
    getCardIcon(): string { return "fas fa-microchip"},
    getCardImg(): string { return "" },
    getTitle(): string { return "LightLab" },
    getCardDescription(): string { return "A breadboard prototype to control an Adafruit Neopixel paired with a web interface for lighting sequence management." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2013 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return true },

}