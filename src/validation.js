export function validate(val) {
    const required = ['method', 'url', 'types'];
    const err = [];

    if (val) {

        if (Object.keys(val).indexOf(required[0]) < 0) {
            err.push(required[0]);
        }

        if (Object.keys(val).indexOf(required[1]) < 0) {
            err.push(required[1]);
        }

        if (Object.keys(val).indexOf(required[2]) < 0) {
            err.push(required[2]);
        }

        if (err.length === 0) {
            return true;
        } else {
            err.map((item) => {
                return console.log(item, "is required");
            });
            return false;
        }

    } else {
        return false;
    }
}