import langs from "$/langs.json";

export function entries() {
	return Object.keys(langs).map((lang) => ({ lang }));
}
