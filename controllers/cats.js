import { v4 as uuidv4 } from 'uuid';

let cats = [];

export const createCat = (req, res) => {
    const cat = req.body;
    cats.push({...cat, id:uuidv4() });
    res.send("Done!");
}

export const getCats = (req, res) => {
    res.send(cats);
}

export const getCatById = (req, res) => {
    const { id } = req.params;
    cats.find((cat) => cat.id === id);
}

export const deleteCat = (req, res) => {
    const { id } = req.params;
    cats = cats.filter((cat) => cat.id != id);
    res.send('Done!');
}

export const editCat = (req, res) => {
    const { id } = req.params;
    const { title, age, desc } = req.body;

    const cat = cats.find((cat) => cat.id === id);

    if (cat) {
        if (title) {
            cat.title = title;
        }
        if (age) {
            cat.age = age;
        }
        if (desc) {
            cat.desc = desc;
        }
        res.send('Done!');
    } else {
        res.status(404).send('Cat not found');
    }
}