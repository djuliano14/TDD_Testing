const isUppercase = text => text === text.toUpperCase();

const shoutSingleName = name => `HELLO ${name}!`;
const singleName = name => `Hello, ${name}.`;

const separateNamesInUppercaseAndLowercase = (names, name) => {
    isUppercase(name)
        ? names.uppercase.push(name)
        : names.lowercase.push(name);
    return names;
};

const splitNamesCommas = (names, name) => {
    if (name[0] === '"' && name[name.length - 1]) {
        const escapedName = name.substr(1, name.length - 2);
        return [...names, escapedName];
    }
    return [...names, ...name.split(", ")];
};

const handleLowercase = names => {
    if (names.length === 0) {
        return "";
    }
    if (names.length === 1) {
        return singleName(names[0]);
    }
    const lastName = names.pop();
    let namesText = names.length > 1 ? names.join(", ") + "," : names[0];

    return `Hello, ${namesText} and ${lastName}.`;
};

const handleUppercase = names => {
    if (names.length === 0) {
        return "";
    }
    if (names.length === 1) {
        return shoutSingleName(names[0]);
    }
    const lastName = names.pop();
    let namesText = names.join(", ");

    return `HELLO ${namesText} AND ${lastName}!`;
};

export default (name = null) => {
    if (name === null) {
        return singleName("my friend");
    }
    let names = Array.isArray(name) ? name : [name];

    let { uppercase, lowercase } = names.reduce(splitNamesCommas, [])
        .reduce(separateNamesInUppercaseAndLowercase, { uppercase: [], lowercase: [] });

    let lowercaseText = handleLowercase(lowercase);
    let uppercaseText = handleUppercase(uppercase);

    if (uppercaseText === "") {
        return lowercaseText;
    }
    if (lowercaseText === "") {
        return uppercaseText;
    }

    return `${lowercaseText} AND ${uppercaseText}`;
};