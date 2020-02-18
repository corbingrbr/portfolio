import Project from '../interfaces/project.interface';

export const WebGLCL : Project = {

    getTechnologies(): string[] { return ["js", "webgl"]},
    getCardIcon(): string { return "fas fa-gem"},
    getCardImg(): string { return "" },
    getTitle(): string { return "WebGLCL" },
    getCardDescription(): string { return "A rewrite in WebGL of the OpenGL project 'Crystal Lattice'."},
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return true },

}