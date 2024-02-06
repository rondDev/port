import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  console.info(params.project);
  const splitArr = params.project.split('-');
  console.info(splitArr[splitArr.length - 1]);
  //TODO: Make this functional, probably stored in projects array
  redirect(302, '/projects/image-uploader');
}
