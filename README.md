## Week 9 Homework Due Wednesday April 29 2020 at 6pm

**Note App Local vs Session Storage Project 7:** counts toward **65%** of the **final grade**

**Week 9 Homework Part 2:** counts toward **20%** of the **final grade**

I have **_created_** the **following files** for you:

- `local.js` file in `scripts/js/local.js`.

- `session.js` file in `scripts/js/session.js`.

- `main.css` file in `styles/css/main.css`.

- This `README.md` with **_instructions_**.

- `.gitignore` file to ignore the **_potential_** `.vscode` which sometimes appears if you are using **VS Code**.

- Again, `git clone` this `repository` to your computer. Then `rm -rf .git` and **_re-initialize_** it. The `index.html` of this `project` **_has to be_** in the `root` of the `folder` and **_not_** within **another folder** when **_pushed_** to `Github`. **_Otherwise_**, when I **test** it **_out_**, it will not work.

**For those of you on Windows:** If you don't know your way around **Windows Powershell**, **_don't_** `git clone` **_this_** **repository**. Create a **_new_** **stand alone** **_repository_** yourself, and **copy** and **paste** the **_folders_** inside **this repository** into **_yours_**. That way, you **_won't_** be **_inheriting_** the `.git` folder that you **_possibly_** **can't remove**, and can `git init` from a **clean slate**. If you have **_any questions_**, please **contact me** on **Discord**. If you want to **_try_** **removing** a `.git` folder from a **dummy repo**, you can always **use** the following one I have created on **Github**: [test-repo on Github](https://github.com/interglobalmedia/test-repo). Some **helpful articles** on how to **_remove_** **files** and **folders** (and **_other_** helpful `Powershell` commands) on **Windows** in **Powershell**:

- [How to show hidden files and folders on Windows 10](https://pureinfotech.com/show-hidden-files-folders-windows-10/)

- [PowerShell equivalents for common Linux/bash commands](https://mathieubuisson.github.io/powershell-linux-bash/)

- [Powershell Tutorial](https://www.tutorialspoint.com/powershell/index.htm)

## Note App Local vs Session Storage Project 7:

The following has been **_added_** to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Note App: LocalStorage vs SessionsStorage</title>
  </head>

  <body class="Site">
    <div class="Site-content">
      <div class="note-taker">
        <h1 class="title">Note Taker To Session Storage App</h1>
        <div class="storage-buttons">
          <a class="clear">Clear Storage</a>
          <a class="empty">Empty Storage</a>
        </div>
        <div id="storage-quota-msg"></div>
        <div class="file-save-button">
          <a id="save">Save Text To File for Download</a>
        </div>
        <div class="textarea-wrapper">
          <textarea
            name="text"
            class="session-storage"
            id="textArea"
            cols="50"
            rows="10"
          >
Hello! I love JavaScript, and I prefer sessionStorage. How about you? 👍</textarea
          >
          <button type="button" id="save-text">Save Text</button>
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <script>
        const theDate = new Date();
        const footer = document.querySelector('.site-footer');
        footer.style.fontWeight = '600';
        footer.style.letterSpacing = '0.07rem';
        footer.style.fontFamily = 'Arimo, sans-serif';
        footer.innerHTML = `${theDate.getFullYear()}`;
      </script>
    </footer>
  </body>
</html>
```

- You have to **_add_** the `local.js/session.js` file(s) yourselves to `index.html`.

- You have to **_add_** `main.css` to `index.html`.

- PLEASE REMEMBER that IF you are **_adding_** `Google Fonts`, they **_should be_** placed ABOVE the `external stylesheet` **link**, NOT BELOW. If you **_place_** the `Google Fonts` **below**, I will **_take off_** **points**.

## The Note App Local vs Session Storage Project 7: How It Works

### Using Session Storage

- Place the code related to `sessionStorage` in the `session.js` **file**.

### User Story

In **_this_** **application**, we are **building** a little `note app` in which:

- The **user** can **_type_** a **note** inside the `textarea` **box**. When the **user** **_types_** in the `textarea` **box**, the **text** is **_immediately_** **saved** to `sessionStorage`.

- **_After_** the **user** `types` the `note` in the `textarea box`, the **user** can **_click_** on a `Save Text` button, and the `text` is **_saved_** to `sessionStorage`. **_However_**, the **functionality** of the `Save Text` **button** **_differs slightly_** from **typing** inside the `textarea` **box**. It **_also_** **checks** if the **user** has **_reached_** or **_exceeded_** his/her `storage` **quota**.

- **_After_** **clicking** on the `Save text` **button** or **_typing_** in the `textarea` **box**, he/she can **click** on the `Save Text to File For Download` **button**, a file called `session-storage.txt` is **_downloaded_** to the **user's** `downloads` **directory** on their computer containing the `text` that was inside the `textarea` **box**.

**Note:** If **_using_** `Google Chrome`, the **file** is **_saved_** to the **user's** `downloads` **directory**. If **_using_** `Mozilla FireFox` or `Safari`, the **file** is **_saved_** to the **user's** `desktop` by **_default_**.

- If the **user** wants to **_clear_** the `text content` **rendered** to the `textarea` **box** that also **represents** the `value` of the `key` **_saved_** to `sessionStorage`, he/she would **click** on the `Clear Storage Button`. Then the `text` inside the `textarea` **box** would be (temporarily) cleared, and the `key` and its `value` would also be **_removed_** from `sessionStorage`. On `page reload`, the **_default_** **text** would re-appear.

- If the **user**wants to **_empty_** `storage` **_altogether_**, he/she would **click** on the `Empty Storage` **button**. This would **clear** **_all_** `key/value` **pairs** in `sessionStorage`. In **_our case_**, we only have **one** `key/value` **pair**, so that is the **_only thing_** that will be **emptied**.

## The Note App Local vs Session Storage Project 7: How To Build It

### Global variables

**_First_** we have to **declare** and **initialize** some **_variables_**.

- One is for the `clearStorage` **button**.

- One is for the `emptyStorage` **button**.

- One is for the `storageQuotaMsg` **div**.

- One is for the `saveTextButton` **button**.

- One is for the `fileDownloadButton` **button**.

- One is for the `textarea` **box**. We will call this `textField`.

### Declaring and Defining the sessionStorageToFile() function

- **_NEXT_**, we have to **create** a `function` for **_storing_** the `text` from the `textarea` **box** to a `text file` called `session-storage.txt`. This is **_new_** to you, so I will take you through the steps, what each piece does, and what each piece represents.

- First we **_declare_** and **_define_** a `function` called `sessionStorageToFile()`. Something like **_this_**:

```js
function sessionStorageToFile() {}
```

- **_NEXT_**, inside the `body` of the `function`, at the **top**, we **_declare_** and **_initialize_** a `const variable` called `csv`. **_Assign_** it the `value` of `JSON.stringify(sessionStorage['autosave']);`.

The `JSON.stringify()` method **_converts_** a `JavaScript` `object` or `value` to a `JSON` `string`. **_Why_** do we do this? We need to take the `sessionStorage` **object's** `autosave` **property's** `value` and **_extract_** it from `sessionStorage` and **transform** the `value` into a `string` so that we may **_insert_** it into a `.txt` file. **_Otherwise_**, the value of the sessionStorage key would not be readable.

- **_NEXT_**, `console.log()` the `csv` **variable** to see what `value` **_appears_** in the `Chrome Developer Tools` **Console**. **Hint:** this will be **one** of the **_questions_** asked in `Week 9 Homework Part 2`. You will also have to **copy** and **paste** the **_actual value_** **printed out** to the `Console`.

- **_NEXT_**, **_declare_** and **_initialize_** a `variable` called `csvAsBlob`. **_Assign_** it the **value** `new Blob([csv], { type: "text/plain" });`. This line **_also_** **introduces** something **_new_**. The `Bob` **object**! But the `new` **keyword** is **_not_** new!

A `Blob` **object** **_represents_** a `blob`, which is a `file-like` **object** of **_immutable_**, `raw data`. It can be `read` as `text` or `binary (raw) data`, or **_converted_** into a [readableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) so that its `methods` can be **used** for **_processing_** the `data`. Here, we are reading it as `plain text`.

**Blob Breakdown:**

A `Blob` consists of an **_optional_** `string type` (usually a `MIME-type`), plus `blobParts`. `blobParts` are a **sequence** of **_other_** `Blob` **objects**, **strings**, and **BufferSource**.

`blobParts` **_must_** be an `array`. That is why we **wrap** the `csv` **variable** inside `[]`.

We will be **_focusing_** on the `value` of the `csv` **variable**.

**The Blob Constructor Syntax:**

```js
new Blob(blobParts, options);
```

`blobParts`: an `array` of `Blob`, `BufferSource`, or `String` **values**. Our **_instance_** of `Blob` is a `string` **value** of `type` **text/plain**.

`options`: an **_optional_** `object`. We use the `type` **option** in our **_instance_** of `Blob`.

`options`:

- `type`: `Blob` **type**, **_usually_** `MIME-type`, e.g., `image/png`.

- `endings`: whether to **_transform_** `end-of-line` to make the `Blob` **_correspond_** to `current OS newlines (\r\n or \n)`. By **_default_**, it is `transparent` (do nothing), but also can be `native` (transform). We **_don't_** `touch on this` in **_this_** **application**.

**MIME (aka IANA media types) types**:

A `media type` (aka `Multipurpose Internet Mail Extensions`) is a **standard** that indicates the `nature` and `format` of a `document` or `file`. The **IANA** (aka [Internet Assigned Numbers Authority](https://www.iana.org/)) is responsible for all **_official_** `MIME` **types**, and you can find the **most up-to-date** and **complete list** on their [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) **_page_**.

**Important note:** `Browsers` **_use_** the `MIME` **type**, and **_not_** the `file extension`, to **determine** how to **_process_** a `URL`. That means it is **_important_** for `web servers` to **send** the **_correct_** `MIME` **type** in the **response's** `Content-Type` **header**. If this is **_not_** **correctly** **_configured_**, `browsers` will **_probably_** `misinterpret` the `contents` of `files`, and `sites` will **_not_** **work** **_correctly_**. This would **_result_** in the `mishandling` of `file downloads` which means that they **_might_** **not** be able to be **_opened_**.

**_BTW_**, `Blob` **objects** can be **_created_** `client-side` **_only_**.

- **_NEXT_**, **_declare_** and **_initialize_** a `const variable` called `fileNameToSaveAs`. **_Assign_** it the **value** of `"session-storage.txt";`.

- **_NEXT_**, **_declare_** and **_initialize_** a **variable** called `downloadLink`. **_Assign_** it the **value** `document.getElementById("save");`. `document.getElementById("save");` refers to the anchor tag (`<a></a>`) in `index.html` with the `text content` of `Save Text To File for Download`. It **_needs_** to be an `anchor tag/element`. In **_general_**, you **have to** **_use_** an `anchor tag/element` when you want to **_download_** a `file`. The **_same_** **applies** **_here_**.

**_The following is a fun part!_**

- **_NEXT_**, **_set_** the `download` **property** on the `downloadLink` variable. **_Assign_** it the **value** of `fileNameToSaveAs`. Something like this:

```js
downloadLink.download = fileNameToSaveAs;
```

What is **_going on_** here? By **_setting_** the `download` **property** on the `anchor element` **stored** as the the **value** of the `downloadLink` **variable**, the **anchor element** `download` **attribute** is **_injected_** in the `anchor element`.

**download property definition:** **_sets_** or **_returns_** the `value` of the `download` **attribute** `link`.

**download attribute definition:** **_specifies_** that the **target** will be **_downloaded_** when a **user** `clicks` on the `hyperlink`.

The `download` **attribute** was **_new_** to the `anchor element` in `HTML5`.

**_Below_** is what the `anchor tag` **_looks like_** (**_check this_** in the `Elements` **tab** in `Chrome Developer Tools`) **before** the **user** `clicks` on it to **_download_** the `.txt` **file** **_containing_** the `text` he/she **_typed_** in the `textarea` **box**:

```html
<div class="file-save-button">
  <a id="save">Save Text To File For Download</a>
</div>
```

**_Below_** is what the `anchor tag` **_looks like_** **after** the **user** **_clicks_** on it to **download** the `.txt` **file** **_containing_** the **text** he/she **_typed_** in the `textarea` **box**:

```html
<div class="file-save-button">
  <a
    id="save"
    download="session-storage.txt"
    href="blob:http://127.0.0.5501/8592ced0-9841-4988-a29f-b3fe50187d30"
    referrer-policy="origin"
    target="_blank"
  ></a>
</div>
```

**_Basically_**, by **setting** the `download` **property** on the **variable** **_storing_** the `anchor tag` as its **_value_** with the `id name` `"save"`, it **results in** the **_injection_** of the `download` **attribute** in the `anchor tag`, and **_because_** we **assign** `downloadLink.download` the **value** of the `fileNameToSaveAs` variable, which **_actually means_** **assigning** the `fileNameToSaveAs` **variable's** **_value_** and **_not_** simply the **variable** **_itself_**, the `session-storage.txt` file is **_set_** as the **value** of `downloadLink.download`.

**_The following is another fun segment!_**

- **_NEXT_**, we have to **_create_** an `if/else statement`. This `if/else statement` **_especially_** **targets** `downloads` in **_mobile_**, but was **_not_** **created** **_exclusively_** for those `downloads`.

  - **_First_**, we have to **create** the `if condition` for the `if statement`. Something like **_this_**:

```js
if (window.URL !== null) {
}
```

**_Inside_** this `if/else statement`, we use the `URL` **interface**. The `URL` **interface** is used to **_parse_**, **_construct_**, **_normalize_**, and **_encode_** `URLs`. It works by **_providing_** `properties` which **allow** you to **read** and **modify** the **components** of a `URL`. You **_usually_** **create** a **new** `URL` **object** by **_specifying_** the `URL` as a `string` when **_calling_** its `constructor`, or by **_providing_** a **relative** `URL` and a **base** `URL` (we **_did_** this with **both** our **_previous_** `API` **projects** to **_create_** **dynamic** `URLs`). You can then **_easily_** read the **parsed components** of the `URL` or **make changes** to the `URL`.

If a `browser` **_doesn't_** yet **support** the `URL()` **constructor**, you can **_access_** a `URL` **object** using the `Window` **interface's** `Window.URL` **property**. You have to **_check_** whether your **browsers** **_require_** this to be `prefixed`. We are taking no chances in our application, and are using window.URL. But we **_don't_** have to use `vendor prefixes`.

So we first have to make sure that an **_actual_** `URL` **exists** in the `active browser window`. We do this by **_setting_** the **condition**

```js
if (window.URL !== null) {
}
```

in the if statement. And we **need** to **_check_** for the `URL` **this way** **_because of_** the `Blob` **object/file** that we **_created_** for `download`. This will be **_apparent_** in the **next step**.

- **_NEXT_**, **since** we have **_determined_** that a `link` **_actually_** **exists**, we do the **_following_**:

```js
downloadLink.href = window.URL.createObjectURL(csvAsBlob);
```

We `set` the `anchor element` `href` **property** on the `anchor element`, which is **_stored_** as the **value** of the `downloadLink` **variable**. We **_assign_** it the **value** of `window.URL.createObjectURL(csvAsBlob);`.

We **_have to_** **use** `window.URL` in order to be able to **set** the `.createObjectURL()` **static method** on the `URL` which is **_injected_** in the `href` **attribute** **_set_** on the `anchor element` as a **_result_** of **setting** the `href` **property** on the `anchor element`.

`.createObjectURL() static method`: **_creates_** a `DOMString` **containing** a `URL` **_representing_** the `object` **_passed in_** as the `parameter`. The `URL` lifetime is **tied** to the `document` in the `window` on which it was **_created_**. The **_new_** `object` `URL` **represents** the **_specified_** `File` **object** or `Blob` **object**.

**Syntax:**

```js
const objectURL = URL.createObjectURL(object);
```

**Parameters:**

**object:** A `File`, `Blob`, or `MediaSource` **object** to **_create_** the **object** `URL` **_for_**.

**Return value:** A `DOMString` **containing** an **object** `URL` that can be **_used_** to `reference` the **contents** of the **_specified_** `source` **object**.

`Blob URLs` or `Object-URLs` are **_used_** with a `Blob` or `File` **object**.

`Blob URLs` can **_only_** be **generated** **_internally_** by the `browser`. `URL.createObjectURL()` **creates** a **_special reference_** to the `Blob` or `File` **object** which **_later_** can be `released` (removed) **using** `URL.revokeObjectURL()`. These `URLs` can **_only_** be **used** **_locally_** (same origin) in the `single instance` of the `browser` and in the `same session` (`life` of the `active page/document`).

`Blob URL/Object URL` is a **pseudo protocol** to **_allow_** `Blob` and `File` **objects** to be **_used_** as a `URL` **source** for **_things like_** `images`, `download links` for `binary data` etc.

We use `window.URL` **_instead of_** the `new URL()` **constructor** **_method_** because of **potential** `browser compatibility issues`, and we **use** `window.URL` because of our `creation/use` of `Blob` to **_create_** a `.txt` **file** in which we **_insert_** the `value` of the `key` we have **_saved_** to `sessionStorage`.

- **_NEXT_**, we set the `href` **property** on `downloadLink`. We **_assign_** it the **value** of `'_blank';`. So it **looks** something like **_this_**:

```js
downloadLink.target = '_blank';
```

What does this `code` **_do_**? The `target` **attribute** of the `anchor element` **specifies** **_where_** to `open` the **_linked_** `document/url`. When **_assigned_** the **value** of `'_blank'`, it **opens** the `link` in a `new browser window` or `tab`.

The `if statement` **_relates to_** `Chrome` and `Safari`. Perhaps you **_may recall_** that `Chrome` and `Safari` **use** the `-webkit` **vendor prefix**. **_However_**, `Firefox` **uses** the `-moz` **vender prefix**, so we **_have_** to **deal** with it a **_bit differently_**. **That** is what our `else statement` is **_for_**.

- **_NEXT_**, we **have to** **_create_** a **condition** for `Firefox`, so we **create** an `else statement` **_targeting_** `Firefox`. We do the **_following_**:

```js
if (window.URL !== null) {
  /* Chrome allows the link to be clicked without actually adding it to the DOM */
  downloadLink.href = window.URL.createObjectURL(csvAsBlob);
  /* so that opens in separate window in Safari. Then save file as .txt on desktop or wherever. Does not show up in downloads however. But that is usually how Safari works. Better UX with separate window. Can also save to an app. I save the file to Wunderlist. All text shows up. Just emojis show up as plain text in Safari mobile. Can be changed to whatever in app in which text file is stored. */
  downloadLink.target = '_blank';
} else {
  downloadLink.window.URL.createObjectURL(csvAsBlob);
  downloadLink.target = '_blank';
  downloadLink.style.display = 'none';
  // add .download so works in Firefox desktop.
  document.body.appendChild(downloadLink.download);
}
```

You will **_notice_** that there is a **slight difference** in the **_approach_** to **setting** the `Blob URL` as the **value** of the `href` **attribute** in the `else statement` vs the `if statement`. That's **_because_** `Chrome` **allows** the `link` to be **_clicked_** **without** actually **_adding_** it to the `DOM`. `Firefox`, on the **_other hand_**, **needs** to have `downloadLink` **_appended_** to the `document.body` (body element), so the **approach** to **_setting_** the `Blob URL` as the **value** of the `href` **attribute** **_differs_** here. We **set** the `Blob URL` **_directly_** on the `downloadLink`.

We **set** the `anchor element` `target` **property** on `downloadLink` in the **_same way_** as for `Chrome` and `Safari`.

But we **_have to_** **append** the `anchor element` to the `body element`, **setting** the `download` **property** on `downloadLink` so that the **property** actually **_works_** in `Firefox` **desktop**.

There is **_another_** **attribute** called `referrerpolicy`, which is **_dynamically_** **added** to the `anchor tag` as a **result** of the **_creation_** of our `Blob URL`. When the `referrerpolicy` **attribute** is **_added_** to our `anchor element`, it is **given** the **value** of `origin`. That means that the `Blob URL` is **_local_** to the **application** as **_opposed_** to a `remote url` which **originates** elsewhere on the **web**.

### Declaring and Defining the sessionStorageSupport() function

- **_NEXT_**, we have to **check** for `sessionStorage` **support**. We do the following:

```js
// check for local storage
function sessionStorageSupport() {
  return typeof Storage !== 'undefined';
}
```

This `function` is **_fairly_** simple. All it does is **check** whether an `instance` of **type** STORAGE **_exists_**, all in one neat little line of code. And as we **_know_**, there are **two types** of `Storage`. There is `localStorage` and `sessionStorage`. When **using** the `return statement`, the `typeof` **operator**, and the **strict** `not equal comparison operator` (!==), as above, it means that `if typeof Storage` is **_not_** `undefined`, `true` will be **_returned_**. If there is **_no_** `sessionStorage` **support**, `false` will be **_returned_**.

**_Essentially_**, the `return statement` means `Return true if typeof Storage is not undefined` or `Return false if typeof Storage is undefined`!

### Declaring and Defining the sessionStorageAndQuota() function

- **_NEXT_**, we have to **save** a `key/value` **pair** to `sessionStorage`, and **fetch** it from `sessionStorage`. But we **_also_** have to **check** if our `sessionStorage` **quota** has been **_exceeded_**. Remember this from the [localStorage vs sessionStorage](http://127.0.0.1:5500/index.html#/7) **_slide deck_**? That `setItem()` may THROW an EXCEPTION if `storage` is FULL? We have to **_integrate_** that `condition` into our `function` which **_takes care_** of **setting** and **getting** `sessionStorage` as well.

We have to **_declare_** and **_define_** a **function** called `function sessionStorageAndQuota() {}` (you can call it whatever you want, but make sure that it describes what it is doing so that others will understand what is going on). It should **look** something like the **_following_**:

```js
function sessionStorageAndQuota() {
  let myStory = document.getElementById('textArea').value;
  // run detection with inverted expression
  if (!sessionStorageSupport) {
    // change value to inform visitor of no session storage support
    storageQuotaMsg.innerHTML = 'Sorry. No HTML5 session storage support here.';
  } else {
    try {
      if (sessionStorage.getItem('autosave', myStory)) {
        // retrieve item
        myStory = sessionStorage.getItem('autosave', myStory);
      } else {
        sessionStorage.setItem('autosave', myStory);
      }
    } catch (domException) {
      domException = new DOMException();
      if (
        domException.name === 'QUOTA_EXCEEDED_ERR' ||
        domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) {
        storageQuotaMsg.innerHTML = 'Session Storage Quota Exceeded!';
      }
    }
  }
}
```

First we **_declare_** and **_initialize_** the **variable** called `myStory` inside the `function body` at the **top**. We **_assign_** it the **value** of `document.getElementById('textArea').value;`. Right **_afterwards_**, we want to **check** for `sessionStorage` **support**, so we **_add_** the following `if statement`:

```js
if (!sessionStorageSupport) {
  storageQuotaMsg.innerHTML = 'Sorry. No HTML5 session storage support here.';
}
```

We do this **using** the `logical` `NOT operator` (!). So if there is NOT `sessionStorageSupport`, we **set** the `innerHTML` **property** on `storageQuotaMsg`, which **represents** the `div element` with the `id` of `storage-quota-msg`, and **_assign_** it the **value** of `'Sorry. No HTML5 session storage support here.';`.

If there IS `sessionStorage` **support**, then the **program** **_steps into_** the `else statement`. There we **set** and **get** our `sessionStorage` as well as **check** if we have **_exceeded_** our `sessionStorage` **quota**. Since we **_have to_** `catch` our `exception`, we **need** to **_use_** a `try...catch` **statement**.

**try...catch definition**: the `try...catch` **statement** **_marks_** a **block** of `statements` to (**_literally_**) **try** (**_out_**) **code**, and **_specifies_** a `response` should an `exception` be **_thrown_**.

**Syntax**:

```js
try {
  try_statements
}
[catch (exception_let_1 if condition_1) { // non-standard
  catch_statements_1
}]
```

`try_statements`: the `statements` to be **_executed_**.

`catch_statements_1`: `statements` that are **executed** if an `exception` is **thrown** in the `try block`.

`exception_let_1`: an `identifier` to **hold** an `exception` **object** for the **_associated_** `catch block`. In **_our_** **application**, the `identifier` is the `domException` **parameter**.

`condition_1`: a `conditional expression`. In the **case** of **_our_** **application**, the `condition` is:

```js
if (
  domException.name === 'QUOTA_EXCEEDED_ERR' ||
  domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
) {
  storageQuotaMsg.innerHTML = 'Session Storage Quota Exceeded!';
}
```

So if `domException.name` is `strict equal` to `'QUOTA_EXCEEDED_ERR'` or `'NS_ERROR_DOM_QUOTA_REACHED'`, then the `storageQuotaMsg.innerHTML` should be **set** to `'Session Storage Quota Exceeded!'`. **Both** are `built-in exceptions`.

But first things first.

### Breaking down the sessionStorageAndQuota() function else statement:

This is what the else statement looks like:

```js
else {
try {
  if (sessionStorage.getItem('autosave', myStory)) {
    // retrieve item
    myStory = sessionStorage.getItem('autosave', myStory);
  } else {
    sessionStorage.setItem('autosave', myStory);
  }
} catch (domException) {
  domException = new DOMException();
  if (
    domException.name === 'QUOTA_EXCEEDED_ERR' ||
    domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
  ) {
    storageQuotaMsg.innerHTML = 'Session Storage Quota Exceeded!';
  }
}
```

**First** we have to **_try out_** the **code**:

```js
try {
  if (sessionStorage.getItem('autosave', myStory)) {
    // retrieve item
    myStory = sessionStorage.getItem('autosave', myStory);
  } else {
    sessionStorage.setItem('autosave', myStory);
  }
}
```

to **make sure** that it **_doesn't contain_** any **errors**. That **_includes_** **exceeding** the `sessionStorage` **quota**.

What the `if/else` **statement** **_itself_** is **stating**, is `if` a `key` **called** `autosave` and its **_associated_** `myStory` `value` (which actually is the `text` **value** **_inside_** the `textarea` **box** which is **_subsequently_** **saved** to `sessionStorage` with the **click** of the `Save Text` **button** or by **_typing_** **text** in the `textarea` **box**) **_exists_**, then **set** the **value** of the `autosave` **key** **_stored_** in `sessionStorage` to the **value** of the `textarea element` with the `id` **name** `textArea`. If there is **_no such_** `key` with the **name** `autosave` containing an **_associated_** `value`, then **create one**. That is **_represented_** by the `else statement`

```js
    else {
    sessionStorage.setItem('autosave', myStory);
  }
```

**_If_**, **however**, an `exception` is **_thrown_**, in **our case**, we are **set up** for the `exception thrown` **_resulting from_** **exceeding** our `sessionStorage` **quota**, then the program **_skips_** the `if statement` and goes **_right into_** the `else statement`. That **_can mean_** **one** of **_two things_**: that we were **trying** to **_save_** a **_new_** `key/value` **pair** to `sessionStorage`or to **update** an **_existing_** `key-value` **pair** to `sessionStorage` that **results** in **_excess_** `sessionStorage` **_beyond_** our **allotted quota**.

If an `exception` is **_thrown_**, the **program** **_enters_** the `catch block`. We have to **pass** the `domException` parameter to the `catch()` **method** so we can **_use_** it **inside** the `catch block`.

```js
  catch (domException) {
  domException = new DOMException();
  console.log(domException.name);
  if (
    domException.name === 'QUOTA_EXCEEDED_ERR' ||
    domException.name === 'NS_ERROR_DOM_QUOTA_REACHED'
  ) {
    storageQuotaMsg.innerHTML = 'Local Storage Quota Exceeded!';
  }
}
```

Inside the `catch block`, we **_first_** **assign** the **parameter/variable** `domException` the **value** of `new DOMException();`. In **_other words_**, a `new instance` of the `DOMException` **object** **_using_** the `DOMException()` **constructor**.

**_Then_**, if `domException.name` is `strictly equal` to `'QUOTA_EXCEEDED_ERR'` **exception** or `'NS_ERROR_DOM_QUOTA_REACHED'` **exception**, the `message` **rendered** as the `innerHTML` of the `storageQuotaMsg` would be `'Local Storage Quota Exceeded!';`. And **_no_** **new** `key/value` **pair** would be **_added_** to `sessionStorage`. It is **possible** that **_none_** would be **updated** **_either_** if it **resulted in** an **excess** of the `storage quota`.

### Declaring and Defining the clearStorage() function

- **_Next_**, we **_declare_** and **_define_** a `function` called `clearStorage()`. This will **clear** whichever `key/value` **pair** is **_passed_** to the `.removeItem()` **method** **_set_** on the `sessionStorage` **object**. Something like **_this_**:

```js
// clear session storage
function clearStorage() {
  const myStory = document.getElementById('textArea');
  myStory.value = '';
  sessionStorage.removeItem('autosave', myStory.value);
}
```

What this `function` **_does_** is **clear** the `text` which **_replaced_** the **default** `textarea element` **text** from the `textarea` **box** and which was **_subsequently_** **extracted** from the `textarea` **box** and **_saved_** to `sessionStorage`. This is **_represented by_** `myStory.value = '';`.

But it does **_not_** end there. We also want to **remove** **_that_** **value** and its **_associated_** `key` entirely from `sessionStorage`. That is **_represented by_** the code `sessionStorage.removeItem('autosave', myStory.value);`. The `removeItem()` **method** is **_passed_** `two arguments`. The `first` is the `name` of the `key` to **_remove_**, and the `second` is the `value` of the `key`. The `value` of the `key` is `myStory.value`, because the `value` of the `autosave` **key** was **_set_** to the `value` of `myStory`. And the `value` **_assigned_** to `myStory` is the `textarea element` with the `id` **name** of `textArea`.

### Declaring and Defining the emptyStorage() function

- **_NEXT_**, we **_declare_** and **_define_** a `function` called `emptyStorage()`. This will **clear** ALL the `key/value` **pairs** that are **_currently stored_** in `sessionStorage` **_irrespective_** of **which application** they **_belong_** to! So be **careful** when **_using_** this `function`. **_Technically_** this really **can't happen** with `sessionStorage` since it **_only persists_** **as long as** the `current active window` or `tab` **_stays open_**, and that it is **not possible** for **_two (sub) domains_** to **exist** **_concurrently_** in **one** `browser tab` or `window`! But this explanation does apply to localStorage, which does persist even after the browser window or tab has been closed. This **_especially_** **applies** in cases **_such as_** **hosting** `multiple sites` via `Github` `gh-pages` **under** **_one username_**.

The **function** looks **something like** **_this_**:

```js
// empty session storage
function emptyStorage() {
  const myStory = document.getElementById('textArea');
  myStory.value = '';
  sessionStorage.clear();
}
```

**_First_** we **remove** the **value** **_stored_** in the `myStory` `textarea` **box**. Then we **_clear_** ALL `key/value` **pairs** **_permanently_** from `sessionStorage`.

### Adding Event Listeners to Buttons

- **_NEXT_**, we have to **_add_** **event listeners** to our **buttons**.

- **_First_** we will **set** the `addEventListener()` **method** on our `clearStorageButton`. Then we **_pass_** in `two arguments` to the `.addEventListener()` **method**. The `first argument` is the `"click"` **event**, and the `second argument` is a **reference** to the `clearStorage()` `function`.

- **_Second_**, we **set** the `addEventListener()` **method** on our `emptyStorageButton`. Then we **_pass in_** `two arguments` to the `.addEventListener()` **method**. The `first argument` is the `"click"` **event**, and the `second argument` is a **reference** to the `emptyStorage()` `function`.

- **_Third_**, we **set** the `addEventListener()` **method** on our `saveTextButton`. Then we **_pass in_** `two arguments`. The `first argument` is the `"click"` **event**, and the `second argument` is an `anonymous function`. Inside the **_body_** of the `anonymous function`, we **first** make a **_call_** to the `sessionStorageAndQuota()` `function`. Then we `console.log()` the`message` `'Message saved to sessionStorage.'`.

- **_Fourth_**, we **set** the `addEventListener()` **method** on the `textField` **variable** which ALSO **represents** the `textarea element`, but is `queried` **using** the `name` **attribute** with the **value** of `text` -> `[name=text]`. This **_creates_** a `separation of concerns` between the **_two_** `query instances`. We do this because the **_two instances_** **pass** **_different_** **events** to the `addEventListener()` **method**. The **first** **_passes in_** `"click"`, and the **second** (the current instance), **_passes in_** the `"input"` **event**.

  - `Two arguments` are **_passed in_** to the `addEventListener()` **method** **_set_** on `textField.` The `first` is the `"input"` event. The `second` is **_another_** `anonymous function`. Inside the **_body_** of the `anonymous function`, we **set** the `.setItem()` **method** to the `sessionStorage` **object**. Then we **_pass in_** `two arguments` to the `.setItem()` **method**. The `first` is the `name` of the `key`, and the `second` is the `textField's` **value**. Can you **_guess_** how the `textField's` **value** is `achieved/represented`?

- **_Last_** of all, we have to **set** the `.addEventListener()` **method** on the `fileDownloadButton`. Then we **_pass in_** `two arguments` to the `.addEventListener()` **method**. The **first** is the `"click"` **event**, and the **second** is a **reference** to the `sessionStorageToFile()` `function`.

And **_that_** **is it** as far as **building the application** **_goes_**!

### Using Local Storage

- Place the code related to `localStorage` in the `local.js` **file**.

- Simply replace all instances of `sessionStorage` with `localStorage`.

- Make sure to change any `Session Storage` or `session storage` text appearing in `innerHTML` **strings** to `Local Storage` or `local storage`.

- Make sure to **_change_** the **name** of the `.txt` **file** **_from_** `session-storage.txt` **to** `local-storage.txt`.

- Make sure to change the name of the `function sessionStorageToFile()` function to `function localStorageToFile()`.

- Make sure to change the name of the `function sessionStorageSupport()` function to `function localStorageSupport()`.

- Make sure to change the name of the `function sessionStorageAndQuota()` function to `function localStorageAndQuota()`.

What **_my_** **rendition** of the **Note Taker To Session Storage App** **_looks_** **like**:

![Note Taker To Session Storage App](/images/Screenshot-2020-04-15-20.56.08.png)

But I would like you to make the **Note Taker To Session Storage App** **styling** **_your own!_**!

## Week 9 Homework Part 2: Questions

1. What is the Web Storage API?

2. What data storage was used before HTML5 was introduced? What was the data storage called and what was it included in?

3. What are 3 advantages of using the Web Storage API over cookies?

4. What are the two objects called for storing data on the client that HTML5 Web Storage provides?

5. Can localStorage and sessionStorage be read server-side?

6. Which data item can be read server-side? Why is it popular? What is it used mostly for? And what kind of data might it contain?

7. Why do cookies have to be well secured and protected?

8. What is the httpOnly flag good for? And what does it help mitigate the negative impact of, for example?

9. What are localStorage and sessionStorage of the Web Storage API connected to? And what does that connection make possible for pages from the same origin to do?

10. What does the Storage Interface of the Web Storage API permit?

11. The Storage Object, represented by the localStorage and sessionStorage objects, contains one property. What is that property called and what does it return? Use your project application to describe what this property does.

12. Give me the five Storage methods of the Web Storage API and describe what each does. When applicable, use code from your project application as examples.

13. When using cookies, why would you want to use the Secure flag?

14. What is the difference between localStorage and sessionStorage?

15. What are the similarities between localStorage and sessionStorage?

16. Explain what try...catch is and what it does.

17. Why do we have to set a try...catch statement in our application? Refer to your/this homework README.md for the answer.

18. Explain what JSON.stringify() does and provide an example using code from your project application.

19. Describe what the value of the csv variable is and why it is important for our application.

20. Please copy and paste the result of the console.log(csv) after you have clicked on the Save Text To File For Download button. Hint: you should try this out only after you have completed building your application.

## Related Resources:

- [JSON.stringify() on W3Schools](https://www.w3schools.com/js/js_json_stringify.asp)

- [MIME types (IANA media types) on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

- [Blob on JavaScript.info](https://javascript.info/blob)

- [Anchor download Property on W3Schools](https://www.w3schools.com/jsref/prop_anchor_download.asp)

- [HTMLAnchorElement.download on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download)

- [Referrer-Policy on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

- [anchor element: The Anchor element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

- [URL interface on MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL)

- [What is a blob URL and why it is used? on stackoverflow](https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used)

- [URL.createObjectURL() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)

- [HTML anchor element target Attribute on W3Schools](https://www.w3schools.com/tags/att_a_target.asp)

- [Referrer Policy on W3C](https://www.w3.org/TR/referrer-policy/)

- [catch QUOTA_EXCEEDED_ERR on localStorage](https://stackoverflow.com/questions/19574966/catch-quota-exceeded-err-on-localstorage)

- [What is the difference between oninput and onchange events in JavaScript?](http://rakshasingh.weebly.com/blog/what-is-the-difference-between-oninput-and-onchange-events-in-javascript)
