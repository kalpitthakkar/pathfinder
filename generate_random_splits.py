import numpy as np
import os, glob
import datetime

def generate_random_splits(pos_samples, neg_samples, map_sam_to_lab, n_splits=5):
    num_pos_samples = len(pos_samples)
    assert num_pos_samples == len(neg_samples)

    tstamp = datetime.date.today()
    if n_splits == 1:
        fn = open('log_gen-'+str(tstamp)+'-train.txt', 'w')
    else:
        fn = open('log_gen-'+str(tstamp)+'-test.txt', 'w')

    num_samples_per_split = num_pos_samples / n_splits

    split_samples = []
    split_labels = []
    rng_state = np.random.get_state()
    fn.write('Random state: {}\n'.format(rng_state))
    psams = np.random.permutation(pos_samples)
    np.random.set_state(rng_state)
    nsams = np.random.permutation(neg_samples)
    for i in range(n_splits):
        if n_splits == 1:
            fn.write('Train:\n')
        else:
            fn.write('Split '+str(i+1)+':\n')
        ps = psams[num_samples_per_split*i : num_samples_per_split*(i+1)]
        ns = nsams[num_samples_per_split*i : num_samples_per_split*(i+1)]
        sams = np.concatenate([ps, ns])
        sams = np.random.permutation(sams)
        labs = []
        fn.write('Samples:'+'\n')
        for sam in sams:
            lab = map_sam_to_lab[sam]
            if n_splits == 1:
                fn.write("{ stimulus: './home/kalpit/train/"+'_'.join(sam.split('/')[-4:])+"', data: { part: 'train', correct_response: '"+map_sam_to_lab[sam]+"'}, correct_key: %d },\n" % (189 if lab == 'no' else 187))
            else:
                fn.write("{ stimulus: './home/kalpit/split"+str(i+1)+"/"+'_'.join(sam.split('/')[-4:])+"', data: { part: 'split"+str(i+1)+"', correct_response: '"+map_sam_to_lab[sam]+"'}, correct_key: %d },\n" % (189 if lab == 'no' else 187))
            labs.append(lab)
        labs = np.asarray(labs)
        split_samples.append(sams)
        split_labels.append(labs)

    fn.close()
    return split_samples, split_labels
