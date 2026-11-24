# Hand Gesture to Emoji — Later Snapshot

A later repository snapshot of the gesture-to-emoji classifier.

**Repository created:** 2022-02-24  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-02-23

## Features and implementation

- Image capture.
- Ml5 classification.
- Two prediction labels.
- Mappings for peace, OK, thumbs, high-five, Vulcan salute and fist.
- Speech helper.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, ml5.js, WebcamJS, Teachable Machine (hosted model).

## How the code works

The `take_snapshot()`, `check()` and `gotResults()` functions implement the same capture, classification and emoji-mapping sequence as the related snapshot.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `take_snapshot()`, `speak()`, `check()`, `gotResults()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/Hand-gesture_done.git
cd Hand-gesture_done
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Capture a hand-gesture image and request identification after the hosted model loads.

## Current status and limitations

This is substantially the same implementation as the related hyphen-named repository; speech variables are not assigned in the callback.

## Related project snapshots

Other repositories in this project family:
- [Hand-gesture-almost-done](https://github.com/Avenger-Sonic123/Hand-gesture-almost-done) — repository created 2022-02-20
- [Hand-gesture-done](https://github.com/Avenger-Sonic123/Hand-gesture-done) — repository created 2022-02-20
- [Hand-gesture_Not_done](https://github.com/Avenger-Sonic123/Hand-gesture_Not_done) — repository created 2022-02-20

---

Source reference: [`a567bb38`](https://github.com/Avenger-Sonic123/Hand-gesture_done/tree/a567bb3849de64d0cfe28ebc8d78d6f844e204fd) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
