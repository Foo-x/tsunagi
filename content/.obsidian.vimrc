" set
set clipboard=unnamed

" map
unmap <Space>

nnoremap j gj
nnoremap k gk

nnoremap Y y$
nnoremap U <C-r>

nnoremap + <C-a>
nnoremap - <C-x>

nnoremap ; :
nnoremap : ;

nnoremap <Space>h ^
nnoremap <Space>l $

nnoremap <Space>o o<Esc>k
nnoremap <Space>O O<Esc>j

nnoremap J <C-f>
nnoremap K <C-b>

"" not to yunk
nnoremap x "_x
nnoremap X "_X
nnoremap s "_s
nnoremap S "_S

"" select all
nnoremap <Space>v ggVG

"" delete all
nnoremap <Space>d ggdG

nnoremap <Space>s :%s//g<Left><Left>

"" toggle highlight
nnoremap <C-l> <C-l>:nohls<CR>

nnoremap <C-o> :obcommand app:go-back<CR>
nnoremap <C-i> :obcommand app:go-forward<CR>

nnoremap <Space>w\ :obcommand workspace:split-vertical<CR>
nnoremap <Space>wgf :obcommand editor:open-link-in-new-leaf<CR>
nnoremap <Left> :obcommand editor:focus-left<CR>
nnoremap <Down> :obcommand editor:focus-bottom<CR>
nnoremap <Up> :obcommand editor:focus-top<CR>
nnoremap <Right> :obcommand editor:focus-right<CR>

nnoremap <Space>tt :obcommand workspace:new-tab<CR>
nnoremap H :obcommand workspace:previous-tab<CR>
nnoremap L :obcommand workspace:next-tab<CR>

nnoremap \x :obcommand editor:toggle-checklist-status<CR>

inoremap jk <Esc>

vnoremap <S-j> <C-f>
vnoremap <S-k> <C-b>

vnoremap j gj
vnoremap k gk

vnoremap + <C-a>gv
vnoremap - <C-x>gv
vnoremap g+ g<C-a>gv
vnoremap g- g<C-x>gv

"" not to override register on paste
vnoremap p pgvy

"" continue visual mode after indenting
vnoremap > >gv
vnoremap < <gv

"" move to end after yank
vnoremap <silent> y y`]

vnoremap <Space>l $
