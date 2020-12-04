# Number Format

NumFormat formats your number with commas if the number is greater or equal to `1000`
e.g if you pass `10000` through the function,
the result will be `10,000`

# Demo

## NumberFormat

Name of the function is NumFormat

## Usage

```javascript
NumFormat(1000); // Number provided into the function must be greater or equal to 1000
```

Result: `1,000`

# Word Limits

The BreakWordFragment and BreakWordFull fragment helps to reduce the number of word you want to display

The major difference between them is:
The BreakWordFragment returns a word, or characters in the word once the limit has been reached,

The BreakWordFragment will always return the word which closest to the limit but not greater,

Example: sentence = "I love building websites with my friends"

The result when you pass the sentence through the BreakWordFragment will be ("I love building w...")

While the result when you pass the sentence through the BreakWordFragment will be ("I love building...")

Note1: When using the functions, you need to pass in two parameters
which are(word, limit{which must be a nubmer, and is optional as there is a default limit})

Note2: The default 17

# Demo

## NumberFormat

### Name of the first function is BreakWordFragment

## Usage

```javascript
BreakWordFragment('I love building with my friends)
```

Result: I love building w...

### Name of the second function is BreakWordFragment

## Usage

```javascript
BreakWordFull('I love building with my friends)
```

Result: I love building...
