export default async function policyDefs(lang: string) {
	return await import(`./langs/${lang}.json`);
}
