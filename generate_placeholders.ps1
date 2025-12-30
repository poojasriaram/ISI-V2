$logos = @(
    @{ Name = "HCL Tech"; File = "hcl.svg"; Color = "#007BFF" },
    @{ Name = "Fortis"; File = "fortis.svg"; Color = "#009944" },
    @{ Name = "Godrej"; File = "godrej.svg"; Color = "#E31937" },
    @{ Name = "Blue Dart"; File = "bluedart.svg"; Color = "#003399" },
    @{ Name = "NTPC"; File = "ntpc.svg"; Color = "#EF3E42" }
)

foreach ($logo in $logos) {
    # Check if .svg exists, or if .png exists (we want to replace missing png with svg if png is missing)
    # But for simplicity, we generate .svg if .svg doesn't exist.
    # We will assume we update the code to point to .svg
    
    $svgContent = @"
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" fill="white"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="$($logo.Color)">$($logo.Name)</text>
</svg>
"@
    Set-Content -Path "public\logos\$($logo.File)" -Value $svgContent
    Write-Host "Generated/Overwrote placeholder for $($logo.Name)"
}
