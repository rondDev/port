import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  console.info(params.project);
  const splitArr = params.project.split('-');
  console.info(splitArr[splitArr.length - 1]);
    if(splitArr.length < 1) { error(404, "/404"); }

    switch(splitArr[splitArr.length - 1]) {
        case "0": {
            redirect(302, '/projects/image-uploader');
        }
        case "1": {
            redirect(302, '/projects/bogopass');
        }
        case "2": {
            redirect(302, '/projects/mystic-woods');
        }
        default: {
                // redirect(306, '/');
            error(404, {
                message: "Couldn't find this project"
            })
        }
    }
}
