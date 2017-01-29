const cluster = require('cluster');

function startWorker() {
    const worker = cluster.fork();
    console.log('Cluster: Slaves worker', worker.id);
}

if (cluster.isMaster) {
    require('os').cpus().forEach(function() {
        startWorker();
    });


    cluster.on('disconnect', function(worker) {
        console.log('Cluster: Slaves disconnected from cluster', worker.id);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Claster: Slaves stopped work with code %d (%s)', worker.id, code, signal);
        startWorker();
    });
} else {
   require('./app')();
}
