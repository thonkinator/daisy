import policyDefs from "$/policyDefs";

export async function load({ params }) {
	const { policies, groups } = await policyDefs(params.lang);
	return { policies, groups };
}

export const prerender = true;
