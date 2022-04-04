export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
}

export function nav() {
    // The nav is always active
    return true;
}

export function marvelApp(location) {
    return prefix(location, "marvel");
}

export function pokemonApp(location) {
    return prefix(location, "pokemon");
}
