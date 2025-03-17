function fun(x, cb) {
    // `fun` is in control of how and when `cb` gets executed
    for (let i = 0; i < x; i++) { /* some task */ }

    cb(); // `cb` is called inside `fun`, so we don't control its execution
}

fun(10, function exec() { // We pass `exec` function to `fun`
    console.log(`done`);
});

/*
   🚀 Inversion of Control (IoC) Explained:
   
   - We pass the `exec` function as a **callback** to `fun`.
   - `fun` **decides** when and how to execute `exec()`.
   - The caller (us) has **no control** over when `exec` runs.
   - If `fun` calls `cb()` multiple times, delays it, or never calls it,
     we have no way to prevent it.
   
   This is called **Inversion of Control**, because we "hand over" control 
   of `exec()` to `fun`, rather than controlling it ourselves.
*/
