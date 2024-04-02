// NOTE: the id property is a string so in the future I'm able to
//       change it if i feel like using more declarative ids
const projects = [
    {
        id: '0',
        image: {
            link: 'https://i.rond.cc/api/FCeGhfTM0OJC.png',
            alt: 'Picture of the sky',
        },
        title: 'Image Uploader',
        time: new Date(2023, 8),
        content:
        'I was tired of having a php script handling all my screenshot needs, so I developed a full solution to image/video uploads for my use case.',
    }
];

function getProjectById(id: string) {
    return projects.filter((p) => p.id === id)
}

export { projects, getProjectById };
