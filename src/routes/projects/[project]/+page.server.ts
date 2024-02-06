import { getProjectById } from "$lib/projects";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const project = getProjectById(params.project)[0];

    if(project.length < 1) {
        error(404, "can't find")
    }

	  return { project }
}
