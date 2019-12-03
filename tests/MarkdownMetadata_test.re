open Jest;
open Expect;


let exampleMatchesSnap = filename => {
    let dirname = Js.Option.getWithDefault(".", [%bs.node __dirname]);
    Node.Path.join([| dirname, "examples", filename |])
        |> Node.Fs.readFileAsUtf8Sync
        |> MarkdownMetadata.parseMetadata
        |> expect
        |> toMatchSnapshot
};


test("Single line metadata", () => exampleMatchesSnap("single-line.md"));
test("Multi line metadata", () => exampleMatchesSnap("multi-line.md"));
test("Multi line CRLF metadata", () => exampleMatchesSnap("multi-line-crlf.md"));
test("Whitespace before metadata", () => exampleMatchesSnap("whitespace.md"));
test("No metadata", () => exampleMatchesSnap("no-metadata.md"));
