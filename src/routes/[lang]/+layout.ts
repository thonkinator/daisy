import policyDefs from "$/policyDefs";
import langs from "$/langs.json";

export async function load({ params }) {
	const { policies, groups } = await policyDefs(params.lang);
	// i hate typescript i hate typescript i hate typescript i hate typescript
	const lang = (langs as Record<string, { code: string; alt: string; name: string }>)[params.lang];

	return { policies, groups, lang };
}

export const prerender = true;
