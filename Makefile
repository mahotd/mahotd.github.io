.PHONY: dev resume

dev:
	python3 -m http.server 8000

resume: resume.pdf

resume.pdf: resume.tex
	SOURCE_DATE_EPOCH=$$(git log -1 --format=%ct -- $< | grep . || date +%s) tectonic $< -o .
