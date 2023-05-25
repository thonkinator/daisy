import { ResolveAcceptLanguage } from "resolve-accept-language";
import langs from "$/langs.json";
import { redirect } from "@sveltejs/kit";
import { building } from "$app/environment";

export function handle({ event: { url, request }, event, resolve }) {
	if (building) return resolve(event);

	let path = url.pathname.split("/");
	const lang = new ResolveAcceptLanguage(
		request.headers.get("Accept-Language") ?? "",
		Object.keys(langs),
		"en-US"
	).getMatch();
	if (path[1] == lang) return resolve(event);
	path[1] = lang;
	throw redirect(308, `${url.origin}/${path.join("/")}`);
}
