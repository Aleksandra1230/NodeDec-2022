const fs = require('fs');
const path = require('path')


//dir
// fs.mkdir(path.join(__dirname,  'folder'), (err)=> {
//     if (err) throw new Error(err.message)
// })
// fs.mkdir(path.join(__dirname, 'folder', 'folder1'), (err)=> {
//     if (err) throw new Error(err.message)
// })
// fs.mkdir(path.join(__dirname, 'folder', 'folder2'), (err)=> {
//     if (err) throw new Error(err.message)
// })
// fs.mkdir(path.join(__dirname, 'folder', 'folder3'), (err)=> {
//     if (err) throw new Error(err.message)
// })
// fs.mkdir(path.join(__dirname, 'folder', 'folder4'), (err)=> {
//     if (err) throw new Error(err.message)
// })
// fs.mkdir(path.join(__dirname, 'folder', 'folder5'), (err)=> {
//     if (err) throw new Error(err.message)
// })

//file
// fs.writeFile(path.join(__dirname, 'folder', 'folder1', 'text1.txt'), 'Hello', (err)=> {
//     if (err) throw new Error(err.message);
// })
// fs.writeFile(path.join(__dirname, 'folder', 'folder2', 'text2.txt'), 'Hello', (err)=> {
//     if (err) throw new Error(err.message);
// })
// fs.writeFile(path.join(__dirname, 'folder', 'folder3', 'text3.txt'), 'Hello', (err)=> {
//     if (err) throw new Error(err.message);
// })
// fs.writeFile(path.join(__dirname, 'folder', 'folder4', 'text4.txt'), 'Hello', (err)=> {
//     if (err) throw new Error(err.message);
// })
// fs.writeFile(path.join(__dirname, 'folder', 'folder5', 'text5.txt'), 'Hello', (err)=> {
//     if (err) throw new Error(err.message);
// })

//console
// fs.readdir(path.join(__dirname, 'folder'), {withFileTypes: true}, (err, files)=> {
//     if (err) throw new Error(err.message);
//     files.forEach(file => {
//     console.log(file.isDirectory());
//     })
// })
// fs.readdir(path.join(__dirname,'folder', 'folder1'), {withFileTypes: true}, (err, files)=> {
//     if (err) throw new Error(err.message);
//     files.forEach(file => {
//     console.log(file.isFile());
//     })
// })