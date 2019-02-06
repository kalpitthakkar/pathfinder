/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome = {
	type: "html-keyboard-response",
	stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

var consent = {
	type: 'external-html',
	url: 'consent.html',
	cont_btn: 'agree'
}
timeline.push(consent);

jsPsych.data.addProperties({
	rt_hand: 'left'
})

var instructions = {
	type: "html-keyboard-response",
	stimulus: "<p> You will make decisions about a series of images. Each image has two long dashed curves in the midst of multiple " +
	"shorter curves. It also contains two white circles. Your task is to decide whether the two circles are on the " +
    "<strong>same</strong> or <strong>different</strong> curves.</p>" +
    "<p>If the circles are on the same curve, press <strong>-</strong>. If the circles are on different curves, press <strong>+</strong>.</p>" +
	"<p>(Do not use the keys on numpad. No need to press SHIFT key for <strong>+</strong>. Just press the keys with <strong>+</strong> and <strong>-</strong>).</p>" +
	"<p><strong> Do your best to respond as quickly as possible.</strong></p>" +
    "<p>The experiment is split into two phases. You will first complete a practice session, consisting of twelve images, in which you will get " +
    "feedback on your performance. Next, you will complete the main experiment, where you will not get any feedback. The main experiment has " +
    "150 images, split into 5 blocks. You will get a chance to rest between each block.</p>" +
	"<p>Press any key to begin.</p>",
};
timeline.push(instructions);

/* train trials */
var train_stimuli = [
	{ stimulus: 'img/train/curv_baseline_neg_imgs_9_sample_9774.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_contour_length_9_neg_imgs_21_sample_9605.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_contour_length_14_neg_imgs_11_sample_4519.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_contour_length_9_imgs_11_sample_5034.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/train/curv_contour_length_9_neg_imgs_13_sample_714.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_baseline_imgs_19_sample_2280.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/train/curv_contour_length_14_neg_imgs_10_sample_9697.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_baseline_neg_imgs_16_sample_8509.png', data: { part: 'train', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/train/curv_contour_length_14_imgs_7_sample_10131.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/train/curv_contour_length_9_imgs_16_sample_7172.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/train/curv_baseline_imgs_1_sample_9207.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/train/curv_contour_length_14_imgs_16_sample_4226.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 189 },
];

/* test trials: split[1-5] */
var split1_stimuli = [
	{ stimulus: 'img/split1/curv_baseline_imgs_8_sample_9260.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_8_sample_2195.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_23_sample_2202.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_14_imgs_7_sample_7410.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_14_neg_imgs_9_sample_3975.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_14_sample_1900.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_14_imgs_2_sample_8431.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_baseline_neg_imgs_23_sample_5005.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_9_sample_5311.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_baseline_imgs_8_sample_506.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_14_imgs_17_sample_490.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_14_neg_imgs_12_sample_2758.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_23_sample_8291.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_14_imgs_8_sample_3068.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_baseline_neg_imgs_19_sample_7848.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_18_sample_7288.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_8_sample_1422.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_baseline_neg_imgs_3_sample_4289.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_3_sample_10184.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_baseline_neg_imgs_21_sample_9665.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_14_sample_4962.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_7_sample_4155.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_baseline_imgs_19_sample_4842.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_6_sample_4462.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_14_sample_6118.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_14_neg_imgs_21_sample_6660.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_baseline_imgs_4_sample_6013.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_9_neg_imgs_17_sample_5335.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split1/curv_contour_length_9_imgs_5_sample_6463.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split1/curv_contour_length_14_neg_imgs_19_sample_4806.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 187 },
];

var split2_stimuli = [
	{ stimulus: 'img/split2/curv_contour_length_9_imgs_21_sample_4005.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_10_sample_10284.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_15_sample_103.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_5_sample_6782.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_19_sample_545.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_baseline_imgs_6_sample_2654.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_2_sample_4894.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_baseline_imgs_21_sample_8440.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_9_neg_imgs_22_sample_240.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_24_sample_9341.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_17_sample_7680.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_9_imgs_4_sample_3031.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_24_sample_2001.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_12_sample_7843.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_9_imgs_4_sample_4825.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_baseline_neg_imgs_11_sample_6778.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_baseline_neg_imgs_15_sample_6364.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_9_imgs_2_sample_7778.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_9_neg_imgs_15_sample_2033.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_1_sample_5564.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_neg_imgs_12_sample_2579.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_baseline_imgs_10_sample_2140.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_8_sample_4502.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_9_sample_1732.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_baseline_imgs_8_sample_2003.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_9_neg_imgs_5_sample_1034.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_baseline_neg_imgs_24_sample_6088.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_baseline_neg_imgs_18_sample_1689.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split2/curv_contour_length_14_imgs_6_sample_9205.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split2/curv_contour_length_9_neg_imgs_23_sample_968.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 187 },
];

var split3_stimuli = [
	{ stimulus: 'img/split3/curv_baseline_imgs_22_sample_2982.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_14_imgs_12_sample_1592.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_5_sample_1391.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_neg_imgs_19_sample_6499.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_14_imgs_16_sample_7470.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_imgs_19_sample_3196.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_imgs_5_sample_2033.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_13_sample_6137.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_baseline_neg_imgs_3_sample_1588.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_21_sample_6433.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_13_sample_298.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_14_imgs_10_sample_8922.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_14_neg_imgs_11_sample_7140.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_6_sample_749.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_imgs_11_sample_6739.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_6_sample_10014.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_18_sample_7198.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_neg_imgs_9_sample_113.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_14_neg_imgs_9_sample_8757.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_12_sample_5471.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_neg_imgs_9_sample_7300.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_17_sample_1478.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_neg_imgs_24_sample_8392.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_14_neg_imgs_15_sample_7343.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_14_neg_imgs_7_sample_9070.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_2_sample_6038.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_14_imgs_7_sample_2827.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_contour_length_9_imgs_11_sample_4190.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split3/curv_baseline_neg_imgs_19_sample_3520.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split3/curv_baseline_imgs_15_sample_2221.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 189 },
];

var split4_stimuli = [
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_13_sample_6628.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_neg_imgs_8_sample_5609.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_4_sample_8048.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_9_sample_5152.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_baseline_imgs_16_sample_1091.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_4_sample_3948.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_9_neg_imgs_3_sample_2284.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_9_neg_imgs_11_sample_2920.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_5_sample_3492.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_16_sample_4047.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_9_imgs_20_sample_1739.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_imgs_1_sample_1185.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_neg_imgs_18_sample_5561.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_baseline_neg_imgs_16_sample_8046.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_18_sample_7644.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_baseline_neg_imgs_17_sample_9061.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_baseline_neg_imgs_4_sample_1319.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_baseline_neg_imgs_13_sample_8553.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_9_imgs_19_sample_9490.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_baseline_imgs_5_sample_6536.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_imgs_20_sample_5442.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_17_sample_1781.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_3_sample_5759.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_baseline_imgs_9_sample_8003.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_imgs_1_sample_8947.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_11_sample_7887.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_baseline_imgs_1_sample_3733.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_14_imgs_12_sample_2271.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split4/curv_contour_length_9_neg_imgs_20_sample_7448.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split4/curv_contour_length_14_neg_imgs_14_sample_7801.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 187 },
];

var split5_stimuli = [
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_10_sample_5942.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_12_sample_2926.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_13_sample_4252.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_9_neg_imgs_19_sample_8782.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_imgs_6_sample_4249.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_9_sample_7893.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_23_sample_1756.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_12_sample_5304.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_9_neg_imgs_21_sample_661.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_19_sample_5182.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_9_imgs_22_sample_3049.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_18_sample_5657.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_16_sample_1270.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_19_sample_2762.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_neg_imgs_9_sample_2063.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_imgs_10_sample_4839.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_9_imgs_21_sample_8577.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_16_sample_6131.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_9_imgs_3_sample_7506.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_baseline_imgs_2_sample_6073.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_14_neg_imgs_6_sample_4584.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_imgs_21_sample_318.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_14_imgs_23_sample_5236.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
	{ stimulus: 'img/split5/curv_contour_length_9_neg_imgs_12_sample_5179.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_20_sample_6550.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_20_sample_2524.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_neg_imgs_10_sample_276.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_neg_imgs_3_sample_8282.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_baseline_neg_imgs_13_sample_8995.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 187 },
	{ stimulus: 'img/split5/curv_contour_length_14_imgs_4_sample_6354.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 189 },
];

var subject_id = jsPsych.randomization.randomID(15);
var basename = "experiment_data-"
var save_filename = basename.concat(subject_id);
jsPsych.data.addProperties({
	SubjectID: save_filename
})

var fixation = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:60px;">+</div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 1000,
	data: { part: 'fixation' }
}

var rest1 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Practice session is now complete.</p>You will now begin the main experiment. There are 5 phases, each with 30 images. ' +
        'You will have a chance to REST between two phases.</p> <p>Press any key to begin the main experiment </p> </div>',
	data: { part: 'rest' }
}

var rest2 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 1 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest3 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 2 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest4 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 3 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest5 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 4 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var thanks = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> The entire experiment is now complete. Thank you very much for your time. </p>' +
			'<p> You will now see a page with your unique code. Make sure to copy it and paste it on your mechanical turk page. </p> </div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 6000,
	data: { part: 'thanks' },
	on_finish: function() {
		// call the saveData function after the experiment is over
		var raw_data = jsPsych.data.get().values()[0];
		console.log(raw_data.workerid);
		var workerid = raw_data.workerid;
		var assignmentid = raw_data.assignmentid;
		var hitid = raw_data.hitid;
		var turksub = raw_data.turksubmit;
		// jsPsych.data.displayData();
        // jsPsych.data.get().localSave('csv', save_filename.concat('.csv'));
		saveData(save_filename, jsPsych.data.get().csv(), subject_id, workerid, assignmentid, hitid, turksub);
	}
}

var train = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Correct response! </p>",
	incorrect_text: "<p class='prompt'> Incorrect response! </p>",
	feedback_duration: 500,
    prompt: "<p> Are the two circles on the same dashed curve? Respond (-)yes or (+)no: </p>"
}

var test = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Are the two circles on the same dashed curve? Respond (-)yes or (+)no: </p>",
	incorrect_text: "<p class='prompt'> Are the two circles on the same dashed curve? Respond (-)yes or (+)no: </p>",
	feedback_duration: 0,
    prompt: "<p> Are the two circles on the same dashed curve? Respond (-)yes or (+)no: </p>"
}

var train_procedure = {
	timeline: [fixation, train],
	timeline_variables: train_stimuli,
	randomize_order: false,
}
timeline.push(train_procedure);
timeline.push(rest1);

var test_split1_procedure = {
	timeline: [fixation, test],
	timeline_variables: split1_stimuli,
	randomize_order: true,
}
timeline.push(test_split1_procedure);
timeline.push(rest2);

var test_split2_procedure = {
	timeline: [fixation, test],
	timeline_variables: split2_stimuli,
	randomize_order: true,
}
timeline.push(test_split2_procedure);
timeline.push(rest3);

var test_split3_procedure = {
	timeline: [fixation, test],
	timeline_variables: split3_stimuli,
	randomize_order: true,
}
timeline.push(test_split3_procedure);
timeline.push(rest4);

var test_split4_procedure = {
	timeline: [fixation, test],
	timeline_variables: split4_stimuli,
	randomize_order: true,
}
timeline.push(test_split4_procedure);
timeline.push(rest5);

var test_split5_procedure = {
	timeline: [fixation, test],
	timeline_variables: split5_stimuli,
	randomize_order: true,
}
timeline.push(test_split5_procedure);
timeline.push(thanks);

var pastecode = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:20px;"> <p> <strong> Your unique code: </strong> ' + subject_id +
			'</p> Paste this on the Mechanical Turk page and press Submit to complete the experiment. ' +
			'Once you are done submitting, you can safely close this tab. </p> </div>',
	choices: [13],
	data: { part: 'code' }
}

timeline.push(pastecode);

function saveData(name, data, subid, workid, assignid, hitid, turksub) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', './write_data.php'); // 'write_data.php' is the path to the php file described above.
	xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response.success);
            //alert(response.success);
        }
        else {
			console.log("There is some error in accessing files");
			//alert("There is some error in accessing files");
        }
    };
	xhr.send(JSON.stringify({filename: name, filedata: data, SubjectID: subid, 
		workerId: workid, assignId: assignid, hitId: hitid, turksub: turksub}));
}

/* start the experiment */
jsPsych.init({
	timeline: timeline,
});
