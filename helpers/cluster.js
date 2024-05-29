const clusterMaker = require( 'clusters' );

function makeClusters( data ) {

    clusterMaker.k( 5 );
    clusterMaker.iterations( 750 );
    clusterMaker.data( data );
    const clusters = clusterMaker.clusters();
    clusters.sort( ( a, b ) => a.centroid[ 0 ] - b.centroid[ 0 ] );
    
    return clusters;
}

function matchCluster( clusters, value ) {

    let matchingClusterIndex = 0;
    let diff = null;
    let min = null;
    for ( let i = 0; i < clusters.length; i++ ) {
        diff = Math.abs( clusters[ i ].centroid[ 0 ] - value );
        if ( i == 0 || diff < min ) {
            matchingClusterIndex = i;
            min = diff;
        }
    }

    return matchingClusterIndex;
}

module.exports = {
    makeClusters, 
    matchCluster
}
