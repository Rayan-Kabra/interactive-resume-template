import { DownloadIcon, PrintIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'

export function PdfDownload() {
  const { language, resolve } = useTranslation()

  const pdfConfig = resumeConfig.pdf
  const { path, label } = pdfConfig ?? {}

  // Resolve path: string = same PDF for all languages, LocalizedString = per-language PDF
  // Hides the button if no PDF exists for the current language
  const resolvedPath = path
    ? typeof path === 'string'
      ? path
      : path[language] ?? null
    : null

  const downloadLabel = label
    ? resolve(label)
    : resumeConfig.labels.actions.downloadPdf
      ? resolve(resumeConfig.labels.actions.downloadPdf)
      : 'Download PDF'

  const printLabel = resumeConfig.labels.actions.printPdf
    ? resolve(resumeConfig.labels.actions.printPdf)
    : 'Print / Save PDF'

  return (
    <div className="flex items-center gap-2">
      {resolvedPath && (
        <a
          href={assetUrl(resolvedPath)}
          download={resolvedPath.split('/').pop() ?? 'resume.pdf'}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
        >
          <DownloadIcon className="w-4 h-4" />
          {downloadLabel}
        </a>
      )}
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
      >
        <PrintIcon className="w-4 h-4" />
        {printLabel}
      </button>
    </div>
  )
}
