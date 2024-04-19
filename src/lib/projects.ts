// NOTE: the id property is a string so in the future I'm able to
//       change it if i feel like using more declarative ids
const projects = [
    {
        id: '0',
        image: {
            link: 'https://i.rond.cc/api/FCeGhfTM0OJC.png',
            alt: 'Image Uploader Dashboard',
        },
        title: 'Image Uploader',
        time: new Date(2023, 8),
        content:
        'I was tired of having a php script handling all my screenshot needs, so I developed a full solution to image/video uploads for my use case.',
    },
    {
        id: '1',
        image: {
            link: 'https://i.rond.cc/api/rjyMu0JrWIy3.png',
            alt: 'Bogopass Completing 60 Char Password',
        },
        title: 'Bogopass',
        time: new Date(2024, 2, 20),
        content:
        'A friend presented me with a purposefully bad password generator he had made, so I remade it in rust.',
    },
    {
        id: '2',
        image: {
            link: 'https://i.rond.cc/api/9khZnyo2jnTh.png',
            alt: 'Story Intro Mystic Woods'
        },
        title: 'Mystic Woods Game',
        time: new Date(2024, 3, 2, 11),
        content: 'I was tasked to build a console based game.'
    }
];

function getProjectById(id: string) {
    return projects.filter((p) => p.id === id)
}

export { projects, getProjectById };
