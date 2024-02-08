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
    },
    {
        id: '1',
        image: {
            link: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Clouds in the sky',
        },
        title: 'Super Project',
        time: new Date(),
        content: 'Showcasing Super blahblah',
    },
];

function getProjectById(id: string) {
    return projects.filter((p) => p.id === id)
}

export { projects, getProjectById };
