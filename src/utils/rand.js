/**
 *
 * Created by hygkui on 2017/9/10
 */
const seed = () => new Date().getTime();
const rnd = () => (seed() * 9301 + 49297) % 233280 / (233280.0);

exports.rand = (number) => Math.ceil(rnd() * number);
exports.rnd = rnd;
