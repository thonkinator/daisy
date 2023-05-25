import { request } from "undici";
import fs from "node:fs";

const langs = JSON.parse(fs.readFileSync("./src/lib/langs.json"));

if (fs.existsSync("src/lib/langs")) {
	fs.rmSync("src/lib/langs", { recursive: true, force: true });
}
fs.mkdirSync("src/lib/langs", { recursive: true });

Object.entries(langs).forEach(async ([key, region]) => {
	const { body } = await request(
		`https://chromeenterprise.google/intl/${region.alt}/static/json/policy_templates_${key}.json`
	);
	const defs = (await body.json()).policy_definitions;
	const policies = defs
		.filter((policy) => policy.type != "group")
		.filter((policy) => policy.supported_on?.some((platform) => platform.startsWith("chrome_os")));
	const groups = defs
		.filter((policy) => policy.type == "group")
		.filter((group) =>
			group.policies.some((policyName) => policies.find((policy) => policy.name == policyName))
		);
	fs.writeFileSync(`src/lib/langs/${key}.json`, JSON.stringify({ policies, groups }));
});
