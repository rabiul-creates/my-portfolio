from fontTools.ttLib import TTFont

font = TTFont("Saans_Regular.ttf")

# Explicitly sort the name records
if "name" in font:
    font["name"].names.sort(
        key=lambda record: (
            record.platformID,
            record.platEncID,
            record.langID,
            record.nameID,
        )
    )

font.save("MyFont-fixed.ttf")
