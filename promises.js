postListPromises = new Promise((resolve,reject)=>{
    $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
        console.log('GET POST List=>',data);
        resolve(data);

    }).fail(err=>{
        reject(new Error(`Call failed for GET POST list request with status ${err.status}`));
    });
});

postListPromises.then((response)=>{
    console.log('sucess!');
}

).catch((error)=>{
    console.log('call fail!');
});
