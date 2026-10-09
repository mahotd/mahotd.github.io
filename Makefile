.PHONY: dev resume

dev:
	python3 -m http.server 8000

resume:
	tectonic resume/resume.tex -o .
