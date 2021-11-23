const musicChoices = {
    femaleSingers: ['Britney Spears', 'Mariah Carey', 'Madonna', 'Gwen Stefani', 'Celine Dion', 'Beyonce', 'Christina Aguilera'],
    maleSingers: ['Michael Jackson', 'Elton John', 'George Michael', 'Tupac', 'Vanilla Ice', 'Paul McCartney', 'Michael Buble', 'John Legend'],
    bands: ['Nirvana', 'Green Day', 'Blink 182', 'Red Hot Chili Peppers', 'Pearl Jam', 'The Smashing Pumpkins', 'Radiohead']
}


const randomMusic = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

const message = `Your playlist consists of: ${randomMusic(musicChoices.femaleSingers)}, ${randomMusic(musicChoices.maleSingers)}, and ${randomMusic(musicChoices.bands)}`

console.log(message)