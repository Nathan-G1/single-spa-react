import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@marvel/marvel-nav",
  () => System.import("@marvel/marvel-spa"),
  isActive.nav,
  { domElement: document.getElementById("nav") }
);

registerApplication(
  "@marvel/marvel-spa",
  () => System.import("@marvel/marvel-spa"),
  isActive.marvelApp,
  { domElement: document.getElementById("marvel") }
);

registerApplication(
  "@marvel/pokemon-app",
  () => System.import("@marvel/pokemon-app"),
  isActive.pokemonApp,
  { domElement: document.getElementById("pokemon") }
);

start();
