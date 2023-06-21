import { APPS } from "./constant";

const getSubdomain = (location: string) =>{
    // subdomain.example.com

    const locationParts = location.split(".");
    let sliceTill = -2;

    //[subdomain,example,com]

    //For localhost
    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    if(isLocalHost) sliceTill = -1;
    return locationParts.slice(0,sliceTill).join("");
}

export const getApp = () =>{

    const subdomain = getSubdomain(window.location.hostname);
    const main = APPS.find((app) => app.main);

    if(!main) throw new Error("Must have main app");

    if(subdomain === "") return main.app;
    const app = APPS.find((app)=> subdomain===app.subdomain);

    if(!app) return main.app;
    return app.app
}